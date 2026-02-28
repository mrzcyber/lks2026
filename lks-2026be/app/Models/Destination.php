<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    protected $fillable = [
        'nama',
        'deskripsi',
        'lokasi',
        'lat',
        'long',
        'foto',
        'category_id',
        'harga_tiket'
    ];

    public function kategori():BelongsTo{
        return $this->belongsTo(Category::class,'category_id','id');
    }

    public function galeri():HasMany{
        return $this->hasMany(Galery::class,'destination_id','id');
    }
}
