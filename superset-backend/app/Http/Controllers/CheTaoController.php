<?php

namespace App\Http\Controllers;

use App\Models\CheTao;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CheTaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cheTao = CheTao::all();
        return response()->json($cheTao);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'stationId' => 'required',
            'amount' => 'required',
            'time' => 'required'
        ]);
        $cheTao = CheTao::create($request->all());
        return response()->json(['message'=> 'created successfully !', 
        'cheTao' => $cheTao]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheTao  $cheTao
     * @return \Illuminate\Http\Response
     */
    public function show(CheTao $cheTao)
    {
        return $cheTao;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CheTao  $cheTao
     * @return \Illuminate\Http\Response
     */
    public function edit(CheTao $cheTao)
    {
        // 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CheTao  $cheTao
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CheTao $cheTao)
    {
        $request->validate([
            'stationId' => 'required',
            'amount' => 'required',
            'time' => 'required'
        ]);
        $cheTao->stationId = $request->input('stationId');
        $cheTao->amount = $request->input('amount');
        $cheTao->time = $request->input('time');
        $cheTao->save();

        return response()->json([
            'message' => 'updated successfully!',
            'cheTao' => $cheTao
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheTao  $cheTao
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheTao $cheTao)
    {
        $cheTao->delete();
        return response()->json([
            'message' => 'deleted successfully!'
        ]);
    }

    public function search($key) {
        $cheTao = CheTao::where('id', 'LIKE', "%".$key."%")
        ->orWhere('stationId','LIKE',"%".$key."%")
        ->orWhere('amount','LIKE',"%".$key."%")
        ->orWhere('time','LIKE',"%".$key."%")
        ->get();
        return response()->json($cheTao);
    }
}
