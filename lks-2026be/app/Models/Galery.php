<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Galery extends Model
{
    protected $fillable = [
        'nama_galeri',
        'destination_id'
    ];

    public function destinasi():BelongsTo{
        return $this->belongsTo(Destination::class,'destination_id','id');
    }
}
