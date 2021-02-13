<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function store(Request $request){
        $post = new Post();
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->user_id = Auth::id();
        if($request->has('status')){
            if($request->input('status') == "published"){
                $post->published_at = now();
            }
        }
        $post->save();

        return response()->json(['post' => $post], 201);
    }
}