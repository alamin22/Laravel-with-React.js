<?php

namespace App\Http\Controllers;
use DB;

use Illuminate\Http\Request;

class TestReactController extends Controller
{
    function getData(){
        $data = DB::table('managements')->get();
        return response()->json($data,200);
    }
    function getDataDetails(Request $request,$id){
        $data = DB::table('managements')->where('id',$id)->first();
        return response()->json($data,200);
        //return view('welcome')->withData(json_encode($data));
    }
    function bookStrore(Request $request){
        $id = DB::table('books')->insert([
            'name' => $request->bookName,
            'price' => $request->price,
            'author' => $request->authorName,
        ]);
        return response()->json('Data Save Successfully !');
    }
    function getUsers(){
        $getUsers = DB::table('books')->get();
        return response()->json($getUsers);
    }
    function deleteUsers(Request $request,$id){
        DB::table('books')->where('id',$id)->delete();
        return response()->json('deleted');
    }
    function singleUser(Request $request,$id){
       $singleUser = DB::table('books')->where('id',$id)->first();
        return response()->json($singleUser);
    }

    function editUser(Request $request,$id){
        $data = DB::table('books')->where('id',$id)->update([
            'name' => $request->uName,
            'price' => $request->price,
            'author' => $request->author,
        ]);
        return response()->json($data);
    }
}
