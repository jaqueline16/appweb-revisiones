<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; 

class CommentController extends Controller
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
            'comentario'=>'required|string',
            'id_revision'=>'required|integer',
            'id_usuario'=>'required|integer',
            'id_categoria'=>'required|integer',
        ]);

        if($validateData->fails()){
            return response()->json($validateData->errors(),400);
        }
        else{
            $comentario=new Comment();
            $comentario->comentario=$request->comentario;
            $comentario->id_revision=$request->id_revision;
            $comentario->id_usuario=$request->id_usuario;
            $comentario->id_categoria=$request->id_categoria;
            $comentario->save();
    
            return response()->json([
                //el estatus 201 hace referencia a algo creado 
                "status"=>201,
                "message"=>"Comentario registrado correctamente"
            ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment,$id_categoria)
    {
        $id_usuario=1;
        $response = Comment::where('id_usuario',$id_usuario)->
        where('id_categoria',$id_categoria)->get();
        return $response;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
