<?php

namespace App\Http\Controllers;

use App\Models\Mc;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class McController extends Controller
{
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
    public function store(Request $request)
    {
        $validateData = Validator::make($request->all(),[
            'nombre'=>'required|string',
            'id_usuario'=>'required|integer'
        ]);

        if($validateData->fails()){
            return response()->json($validateData->errors(),400);
        }
        else{
            $revista_congreso=new Mc();
            $revista_congreso->nombre=$request->nombre;
            $revista_congreso->id_usuario=$request->id_usuario;
            $revista_congreso->save();
    
            return response()->json([
                //el estatus 201 hace referencia a algo creado 
                "status"=>201,
                "message"=>"Registrado correctamente"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Mc $review)
    {
        $id_usuario=2;
        $response = Mc::where('id_usuario',$id_usuario)->get();
        return $response;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
