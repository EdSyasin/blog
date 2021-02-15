<?php

namespace App\Models;

use App\Casts\Json;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $dates = ["published_at"];

    protected $casts = [
        "content" => Json::class
    ];

    public function getFirstParagraphAttribute(){
        $content = $this->content;
        foreach ($content->blocks as $block ){
            if($block->type === 'paragraph'){
                //var_dump(substr($block->data->text, 0, 150)) . '...';
                $res = $block->data->text;
                return $res;
            }
        }

    }
}
