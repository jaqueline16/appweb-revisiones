<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; 
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    public $response;
    public $responseCode;
    public $path_images_base64;

    public function __construct()
    {
        $this->response = array(
            'error' => true,
            'data' => null,
            'message' => null
        );
        $this->responseCode = 404;
        $this->path_images_base64 = '';
    }

    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request, $ultimoArchivoSubido)
    {
        $validateData = Validator::make($request->all(),[
            'nombre_articulo'=>'required|string',
            'id_revista_congreso'=>'required|integer',
            'id_usuario'=>'required|integer'
        ]);

        if($validateData->fails()){
            return response()->json($validateData->errors(),400);
        }
        else{
           
            try {
            DB::transaction(function() use ($request) {
             //Crear un nuevo registro
                $revision=new Review();
                //Colocar los datos al guardar 
                $revision->fecha_revision=$fecha = Carbon::now();
                $revision->nombre_articulo=$request->nombre_articulo;
                $revision->id_revista_congreso=$request->id_revista_congreso;
                $revision->id_usuario=$request->id_usuario;
                //Guardar los datos en la BD 
                $revision->save(); 
                //asignar el ultimo id guardado a una variable
                $idRecienGuardado=$revision->id;

                //var_dump($idRecienGuardado);
                //$pruebaruta='prueba';

                //nombre, extension y archivo 
                //

                $archivoRevision= new File(); 
                $archivoRevision->archivo=Storage::disk('files')->get($ultimoArchivoSubido);
                $archivoRevision->id_revision=$idRecienGuardado; 
                $archivoRevision->save(); 
           
            });
            
            } catch (\Exception $e) {
            return response()->json(['message' => 'Error']);
            }
            
            return response()->json(['message' => 'Revisión registrada correctamente']);

            
        }

    }


   

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        $id_usuario=2;
        $response = Review::where('id_usuario',$id_usuario)->get();
        return $response;
        //$response='Hola';
        //return response()->json($response,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */

    
    
    public function uploadFiles(Request $request)
    {
        //Ingresa en una variable el nombre del campo en el que está cargando el archivo 
        $files = $request->file('files');
        //Valida los tipos de archivos 
        $validate = Validator::make($request->all(), [
            'files.*' => 'required|file|mimes:png,jpg,jpeg,gif,pdf,doc,docx,xls,xlsx'
        ]);
        //Si falla la validación marca error
        if (!$files || $validate->fails()) {
            $this->response['message'] = $validate->errors();
        } else {
            $data = [];

            foreach ($files as $file) {
                //obtiene el nombre original 
                $extension = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                //para obtener la ruta real del archivo
                $path = $file->getRealPath();
                //obtiene el contenido de la ruta 
                $content = file_get_contents($path);
                //lo codifica en base 64
                $base64 = base64_encode($content);
                $mimeContentType = mime_content_type($path);
                $imgBase64 = 'data:' . $mimeContentType . ';base64,' . $base64;
                $extension = $extension == '' ? explode("/", $mimeContentType)[1] : $extension;
                $imageName = uniqid() . "." . $extension;
                // array_push($data, $imgBase64);

                self::saveFileServer($content, strtolower($extension), $imageName);
            }
            $this->response['data'] = "Archivo guardado";
            $this->response['error'] = false;
            $this->responseCode = 200;
        }
        return response()->json($this->response, $this->responseCode);
    }
    
    private function saveFileServer($file, $folder, $imageName)
    {

        $path = '';
        if ($folder == 'png' || $folder == 'jpeg' || $folder == 'jpg' || $folder == 'gif') {
            $path = 'img/' . $folder;
        } elseif ($folder == 'pdf' || $folder == 'doc' || $folder == 'docx' || $folder == 'xls' || $folder == 'xlsx') {
            $path = 'files/' . $folder;
        }
        var_dump($path);
        var_dump($imageName);
        var_dump($path);
        Storage::disk("files")->put($imageName, $file); 
    

    }

    public function downloadFile($fileName)
    {
        $file = Storage::disk('images')->get($fileName);
        Storage::disk('temp')->put("pruebaTemp.png", $file);
        return response()->download(storage_path() . "/app/temp/" . $fileName)->deleteFileAfterSend(true);
    }

    public function getFile($fileName)
    {
        $isset = Storage::disk('img_base64')->exists($fileName);
        if (!$isset) {
            $this->response['message'] = 'Archivo no encontrado';
        } else {
            $file = Storage::disk('img_base64')->get($fileName);
            $this->response['data'] = $file;
            $this->response['error'] = false;
            $this->responseCode = 200;
        }
        return response()->json($this->response, $this->responseCode);
    }

}
