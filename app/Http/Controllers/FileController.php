<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function upload(Request $request){
        $file = $request->file("file");
        $originalName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $directory = "public";
        $path = Storage::putFile($directory, $file);

        $newFile = new File;
        $newFile->name = $originalName;
        $newFile->path = $path;
        $newFile->extension = $extension;
        if(Auth::check()){
            $newFile->user_id = Auth::id();
        }

        $newFile->save();

        $res = [
            "file" => [
                "url" => Storage::url($path),
                "name" => $originalName,
                "extension" => $extension
            ]
        ];

        return response()->json($res, 200);
    }

    function uploadFileForEditorJS(Request $request){
        if($request->hasFile('image')){
            $file = $request->file("image");
        } else {
            $file = $request->file("file");
        }
        $originalName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $directory = "public";
        $path = Storage::putFile($directory, $file);

        $newFile = new File;
        $newFile->name = $originalName;
        $newFile->path = $path;
        $newFile->extension = $extension;
        if(Auth::check()){
            $newFile->user_id = Auth::id();
        }

        $newFile->save();

        $res = [
            "success" => 1,
            "file" => [
                "url" => Storage::url($path),
                "name" => $originalName,
                "extension" => $extension
            ]
        ];

        return response()->json($res, 200);

    }

}
