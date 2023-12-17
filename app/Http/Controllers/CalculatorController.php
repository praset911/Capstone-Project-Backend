<?php

namespace App\Http\Controllers;

use App\Models\Calculator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CalculatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        if(Auth::check()){
            $calculators = Calculator::where('users_id', auth()->user()->id)->get();
            return Inertia::render('Calculator', compact('calculators'));
        } else {
            return Inertia::render('Calculator');
        }
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Log::info('Incoming data:', $request->all());
        $calculator = new Calculator();
        $calculator->users_id = auth()->user()->id;
        $calculator->weight = $request->weight;
        $calculator->height = $request->height;
        $calculator->age = $request->age;
        $calculator->bmi = $request->bmi;
        $calculator->calories = $request->calories;
        $calculator->body_weight = $request->bodyWeight;
        $calculator->tanggal = now()->toDateString();
        $calculator->jam = now()->toTimeString();
        $calculator->save();
        return Redirect::route('cal.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
