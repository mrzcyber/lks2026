<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\Galery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class DestinastionController extends Controller
{
        public function create(Request $request){

        $request->validate([
            'nama' => 'required|max:100',
            'deskripsi' => 'required',
            'lokasi' => 'required|max:100',
            'foto' => 'image|mimes:jpg,png,jpeg,webp|max:2048',
            // 'galeri' => 'image|mimes:jpg,png,jpeg,webp|max:2048',
            'lat' => 'required|max:20',
            'long' => 'required|max:20',
            'category_id' => 'required|max:20',
            'harga_tiket' => 'required|max:100'
        ]);

        DB::beginTransaction();

        try{
        $payload = $request->only(['nama','deskripsi','lokasi','lat','long','category_id','harga_tiket']);

        $payload['foto'] = '';
        if($request->hasFile('foto')){
            $payload['foto'] = $request->file('foto')->store('images','public');
        }

        $res = Destination::create($payload);
        


            if($request->hasFile('galeri')){
           $input = $request->file('galeri');  
       
             foreach($input as $item){
            $url = $item->store('images','public');
           Galery::create([
            'nama_galeri'=>$url,
            'destination_id'=>$res->id
        ]);
    }
    }
    DB::commit();

     return response()->json([
         'message'=>'create berhasil',
         'status'=>200
    ]);

            
        }
        catch(\Exception $e){
        DB::rollBack();
    return response()->json(['error' => 'Gagal menyimpan data: ' . $e->getMessage()], 500);
        }

    }


        public function get(Request $request){
            $search =$request->input('q');

        if($search){
            $res= Destination::with('kategori')->where('nama', 'LIKE','%'.$search .'%' )->get();
            return response()->json($res);

        }

           $res= Destination::with('kategori')->get();

           return response()->json($res);
        }

        public function getid($id){
            $res = Destination::with(['kategori:id,nama_kategori','galeri'=>function($q){
                $q->select('nama_galeri','destination_id');
            }])->where('id',$id)->first();

            return response()->json($res);
        }

        public function getkategori($id){

        $res = Destination::with('kategori')->where('category_id',$id)->get();

        return response()->json($res);

        }

        // edit


        public function edit(Request $request,$id){

        

        $payload = $request->only(['nama','deskripsi','lokasi','lat','long','category_id','harga_tiket']);

        $path = Destination::where('id',$id)->value('foto');

            if($request->hasFile('foto')){
            if(Storage::disk('public')->exists($path)){
                Storage::disk('public')->delete($path);
            };
            $payload['foto'] = $request->file('foto')->store('images','public');
        }

        if($request->hasFile('galeri')){
        $input = $request->file('galeri');  
         $galeri = Galery::where('destination_id',$id)->pluck('nama_galeri');
         DB::beginTransaction();
         try{
         foreach($galeri as $item){
            if(Storage::disk('public')->exists($item)){
                Storage::disk('public')->delete($item);
            }
         }
         Galery::where('destination_id',$id)->delete();
         foreach($input as $item){
            $url = $item->store('images','public');
            Galery::create([
                'nama_galeri' => $url,
                'destination_id' => $id
            ]);
         }
          DB::commit();
         }
         catch(\Exception $e){
            DB::rollBack();
            return response()->json(['message'=>$e->getMessage()]);
         }


        }

          $res = Destination::where('id',$id)->update($payload);

          return response()->json([
            'message'=>'update data berhasil',
            'status'=>200
          ]);
        }




        public function delete($id){

          $path = Destination::where('id',$id)->value('foto'); 
          $galeri = Galery::where('destination_id',$id)->pluck('nama_galeri');

          foreach($galeri as $item){
        if(Storage::disk('public')->exists($item)){
            Storage::disk('public')->delete($item);
          }

          }

          if(Storage::disk('public')->exists($path)){
            Storage::disk('public')->delete($path);
          }

            $res = Destination::where('id',$id)->delete();
            return response()->json([
                'message'=>'data berhasil di hapus',
                'status'=>200
            ]);
        }
}


