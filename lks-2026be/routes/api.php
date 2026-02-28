<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DestinastionController;
// use App\Http\Controllers\GaleryController;
use Illuminate\Support\Facades\Route;

Route::get('/',function(){
    return response()->json([
        'message'=>'bisa'
    ]);
});

Route::post('/login',[AuthController::class,'login']);

Route::get('/kategori',[CategoryController::class,'get']);

Route::get('/destinations',[DestinastionController::class,'get']);
Route::get('/destinations/{id}',[DestinastionController::class,'getid']);
Route::get('/destinations/kategori/{id}',[DestinastionController::class,'getkategori']);


Route::middleware('jwt.verify')->prefix('dash')->group(function(){
Route::controller(CategoryController::class)->prefix('kategori')->group(function(){
    Route::get('/',[CategoryController::class,'get']);
    Route::get('/{id}',[CategoryController::class,'getid']);
    Route::post('/create','create');
    Route::put('/edit/{id}','edit');
    Route::delete('/delete/{id}','delete');
});

Route::controller(DestinastionController::class)->prefix('destinasi')->group(function(){
    Route::get('/',[DestinastionController::class,'get']);
    Route::get('/{id}',[DestinastionController::class,'getid']);
    Route::post('/create','create');
    Route::put('/edit/{id}','edit');
    Route::delete('/delete/{id}','delete');
});


});




