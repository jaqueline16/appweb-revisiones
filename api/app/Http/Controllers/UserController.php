<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
            'apellidos'=>'required|string',
            'nombre_usuario'=>'required|unique:App\Models\User,nombre_usuario|max:20',
            'correo_electronico'=>'required|email:rfc,dns',
            'institucion'=>'required',
            'contraseña'=>'required|min:8|max:20'
            
        ]);

        $contraseñaEncriptada=Hash::make($request->contraseña);

        if($validateData->fails()){
            return response()->json($validateData->errors(),400);
        }
        else{
            $usuario=new User();
            $usuario->nombre=$request->nombre;
            $usuario->apellidos=$request->apellidos;
            $usuario->nombre_usuario=$request->nombre_usuario;
            $usuario->correo_electronico=$request->correo_electronico;
            $usuario->institucion=$request->institucion;
            $usuario->contraseña=$contraseñaEncriptada;
            $usuario->save();
    
            return response()->json([
                //el estatus 201 hace referencia a algo creado 
                "status"=>201,
                "message"=>"Usuario registrado correctamente"
            ]);
        }

       
    }

    public function login(Request $request)
    { 
        $validateData = Validator::make($request->all(),[
            'nombre_usuario'=>'required',
            'contraseña'=>'required'
            
        ]);

        if($validateData->fails()){
            return response()->json($validateData->errors(),400);
        }
        else{
            
            $consultaUsuario= User::where('nombre_usuario',$request->nombre_usuario)
            ->where('activo',1)
            ->get();

            $resultado=count($consultaUsuario);

            if($resultado==1 and hash::check($request->contraseña,$consultaUsuario[0]->contraseña))
            {
                return response()->json([
                    "message"=>"Acceso correcto"
                ]);

            } 
            else {
                return response()->json([
                    "message"=>"Acceso no permitido"
                ]);
            }
        }
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
