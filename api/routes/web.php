<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\McController;
use App\Http\Controllers\FileController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

//se coloca la acción, a la ruta a la que va, a la clase (que es el nombre del controlador) y la función que va a llegar 
Route::post('/register', [UserController::class, 'store']);
Route::post('/', [UserController::class, 'login']);

//se agrupan las rutas para evitar poner una a una, así solo diferencia la acción que se quiere lograr 
Route::prefix('Reviews')->group(function(){
Route::get('/show', [ReviewController::class, 'show']);
Route::post('/addReview', [ReviewController::class, 'store']);
Route::post('/uploadFiles/{id_revision}', [ReviewController::class, 'uploadFiles']);

});

Route::prefix('MagazineOrCongress')->group(function(){
Route::post('/addMC', [McController::class, 'store']); 
Route::get('/show', [McController::class, 'show']);
});

Route::prefix('Comment')->group(function(){
Route::post('/add', [CommentController::class, 'store']);
Route::get('/{id_categoria}', [CommentController::class, 'show']);

});





