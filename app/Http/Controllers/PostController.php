<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function adminShow(Request $request){
        $posts = Post::get();
        return view("admin.posts", ["posts" => $posts]);
    }

    public function store(Request $request){
        $post = new Post();
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->user_id = Auth::id();
        if($request->has('image')){
            $post->image = $request->input('image');
        }
        if($request->has('status')){
            if($request->input('status') == "published"){
                $post->published_at = now();
            }
        }
        $post->save();

        return response()->json(['post' => $post], 201);
    }

    public function delete(Request $request, $id){
        $post = Post::where("id", $id)->first();
        if(!$post){
            return response('Post is not found!', 404);
        }
        $post->delete();
        return response("Post $id has been deleted", 200);
    }
}
