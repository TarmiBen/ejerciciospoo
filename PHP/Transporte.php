<?php
class Transporte {
    public $Modelo;
    private $NumeroSerie;
    Public $Placa;

    __constructor($Model, $num, $placa){
        $this->Model = $Model;
    }

    public function verNumeroDeSerie(){
        return $this->NumeroSerie;
    }
    /**
     * @param {string} $NumerodeSerie
     */
    public function ActualizarNumeroDeSerie(string $NumerodeSerie){
        this->NumeroSerie = $NumerodeSerie
    }

}