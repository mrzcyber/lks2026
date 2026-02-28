<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    public function create(Request $request){

        $data =[

      'nama_kategori' => $request->input('nama_kategori')
        ] ;
            

           Category::create($data);

           return response()->json([
            'message'=>'destinasi berhasil dibuat',
            'data'=>$data
           ]);
    }

    public function get(){
        $res = Category::select('id','nama_kategori')->get();

        return response()->json($res);
    }

    public function getid($id){
        $res = Category::where('id',$id)->select('id','nama_kategori')->first();

        return response()->json($res);
    }

    public function edit (Request $request,$id){

 
      $data =   [
            'nama_kategori' => $request->input('nama_kategori')
        ];

        $res = Category::where('id',$id)->update($data);

        return response()->json([
            'message'=>'data berhasil di perbarui',
        ]);
    }

    public function delete($id){
        $res = Category::where('id',$id)->delete();

        return response()->json([
            'message'=>'data berhasil di hapus',
        ]);
    }
}
