import 'dart:async';

import 'package:flutter/material.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class CronometroWidget extends StatefulWidget {
  const CronometroWidget({Key? key}) : super(key: key);

  @override
  State<CronometroWidget> createState() => _CronometroWidgetState();
}

class _CronometroWidgetState extends State<CronometroWidget> {
  int horas = 0, minutos = 0, segundos = 0, milessimos = 0;

  late Timer timer;

  bool iniciado = false;

  @override
  void initState() {
    iniciar();
    super.initState();
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  void iniciar() {
    if (iniciado) return;

    iniciado = true;
    timer = Timer.periodic(const Duration(milliseconds: 10), (_) {
      setState(() {
        milessimos++;
        if (milessimos >= 100) {
          milessimos = 0;
          segundos++;
        }
        if (segundos >= 60) {
          segundos = 0;
          minutos++;
        }
        if (minutos >= 60) {
          minutos = 0;
          horas++;
        }
      });
    });
  }

  void pausar() {
    timer.cancel();
    setState(() => iniciado = false);
  }

  void parar() {
    timer.cancel();
    setState(() {
      horas = 0;
      minutos = 0;
      segundos = 0;
      milessimos = 0;
      iniciado = false;
    });
  }

  String _formatDoisDigitos(int value) {
    return value.toString().padLeft(2, '0');
  }

  String _formatTresDigitos(int value) {
    return value.toString().padLeft(3, '0');
  }

  @override
  Widget build(BuildContext context) {
    return Text(
      "${_formatDoisDigitos(horas)}:${_formatDoisDigitos(minutos)}:${_formatDoisDigitos(segundos)}.${_formatTresDigitos(milessimos)}",
      style: const TextStyle(
        color: UiCor.tempo,
        fontSize: 24,
        fontWeight: FontWeight.normal,
        fontFamily: 'display',
      ),
    );
  }
}
