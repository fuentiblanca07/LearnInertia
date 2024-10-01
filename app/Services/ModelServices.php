<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;



class ModelServices
{
    public function getAll(Model $model, $id){
        return $model::findOrFail($id);
    }

    public function update(Model $model, Request $request, $id)
    {
        $instance = $model->findOrFail($id);
        $instance->update($request->all());
    }

    public function create(Model $model, Request $request){
        $model->create($request->all());
    }

}
