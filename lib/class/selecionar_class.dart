import 'dart:math';
import 'package:flutter/material.dart';
import 'package:selecao_app/config/value_notifier_config.dart';

class SelecionarClass {
  int indice = 0;

  bool validarTimes(String numeroSelecionado) {
    final int numero = int.parse(numeroSelecionado);
    final int lista = currentJogadores.value.length;

    if (lista == 0) return false;
    if (numero > lista) return false;
    return true;
  }

  List<List<String>> separarEquipes() {
    List<List<String>> equipes = [];
    List<String> lista = currentJogadores.value;
    final int numero = int.parse(currentNumEquipe.value);

    if (lista.length > numero) {
      lista.shuffle();

      int numGrupos = (lista.length / numero).ceil();

      for (int i = 0; i < numGrupos; i++) {
        int startIndex = i * numero;
        int endIndex = min(startIndex + numero, lista.length);

        List<String> grupo = lista.sublist(startIndex, endIndex);
        equipes.add(grupo);
      }
    } else {
      equipes.add(lista);
    }

    return equipes;
  }

  Color definirCor() {
    final listaCores = [
      const Color(0xffC8F51B),
      const Color(0xffE9FFD9),
      const Color(0xffC8B7F3),
      const Color(0xFFFCD45C),
      const Color(0xFFDA714F),
      const Color(0xFF688DE2),
      const Color(0xFF1CF559),
    ];

    final cor = listaCores[indice];
    indice = (indice + 1) % listaCores.length;
    return cor;
  }
}
