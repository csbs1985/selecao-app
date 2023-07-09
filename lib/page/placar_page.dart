import 'dart:async';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/segundo_button.dart';
import 'package:selecao_app/class/partida_class.dart';
import 'package:selecao_app/class/routes_class.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/config/value_notifier_config.dart';
import 'package:selecao_app/dialog/opcoes_dialog.dart';
import 'package:selecao_app/dialog/simples_dialog.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class PlacarPage extends StatefulWidget {
  const PlacarPage({super.key});

  @override
  State<PlacarPage> createState() => _PlacarPageState();
}

class _PlacarPageState extends State<PlacarPage> {
  final PartidaClass _partidaClass = PartidaClass();

  int _periodo = 1;
  int horas = 0, minutos = 0, segundos = 0, milessimos = 0;

  int _pontoMandante = 0, _pontoVisitante = 0;

  String _tempo = TempoEnum.PARAR.value;

  bool iniciado = false;

  Timer timer = Timer.periodic(const Duration(milliseconds: 0), (_) {});

  @override
  void initState() {
    super.initState();
    _alterarPeriodo(currentDefinir.value.periodo);
  }

  Future<void> _dialogInfo() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return const SimplesDialog(
          titulo: COMO_USAR,
          texto: PLACAR_INSTRUCAO,
        );
      },
    );
  }

  Future<void> _dialogVoltar() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return OpcoesDialog(
          callback: (value) => _opcoesVoltar(value),
          titulo: ATENCAO,
          texto: VOLTAR_FINALIZAR,
        );
      },
    );
  }

  Future<void> _dialogReiniciar() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return OpcoesDialog(
          callback: (value) => _opcoesReiniciar(value),
          titulo: ATENCAO,
          texto: REINICIAR_DESCRICAO,
        );
      },
    );
  }

  void _opcoesReiniciar(bool isReiniciar) {
    if (!isReiniciar) {
      Navigator.of(context).pop();
    } else {
      Navigator.of(context).pop();
      pararCronometro();
      currentDefinir.value.mandante = "mandante";
      currentDefinir.value.visitante = "visitante";
      currentDefinir.value.periodo = 1;
      currentDefinir.value.tempo = 25;
      setState(() {
        _pontoMandante = 0;
        _pontoVisitante = 0;
        _periodo = 1;
      });
    }
  }

  void _opcoesVoltar(bool isVoltar) {
    if (isVoltar) {
      Navigator.of(context).pop();
      pararCronometro();
      Navigator.of(context).pop();
    } else {
      Navigator.of(context).pop();
    }
  }

  void _alterarPeriodo(int periodo) {
    final int value = _partidaClass.alterarPeriodo(periodo);
    setState(() => _periodo = value);
  }

  void _alterarTempo(String value) {
    setState(() => _tempo = value);
  }

  bool _desabilitarIniciar() {
    return _tempo == TempoEnum.INICIAR.value ? true : false;
  }

  bool _desabilitarPausar() {
    return _tempo == TempoEnum.INICIAR.value ? false : true;
  }

  bool _desabilitarParar() {
    return _tempo == TempoEnum.PAUSAR.value ? false : true;
  }

  void iniciarCronometro() {
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

    _alterarTempo(TempoEnum.INICIAR.value);
  }

  void pausarCronometro() {
    timer.cancel();
    setState(() => iniciado = false);
    _alterarTempo(TempoEnum.PAUSAR.value);
  }

  void pararCronometro() {
    timer.cancel();
    setState(() {
      horas = 0;
      minutos = 0;
      segundos = 0;
      milessimos = 0;
      iniciado = false;
    });
    _alterarTempo(TempoEnum.PARAR.value);
  }

  String _formatDoisDigitos(int value) {
    return value.toString().padLeft(2, '0');
  }

  String _formatTresDigitos(int value) {
    return value.toString().padLeft(3, '0');
  }

  void _aumentarPontoMandante() {
    setState(() => _pontoMandante++);
  }

  void _aumentarPontoVisitante() {
    setState(() => _pontoVisitante++);
  }

  void _diminuirPontoMandante() {
    if (_pontoMandante > 0) {
      setState(() => _pontoMandante--);
    }
  }

  void _diminuirPontoVisitante() {
    if (_pontoVisitante > 0) {
      setState(() => _pontoVisitante--);
    }
  }

  @override
  void dispose() {
    timer = Timer.periodic(const Duration(milliseconds: 0), (_) {});
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final sizeIcone = width / 6;
    final sizeMetade = (width / 2) - 4;
    const espaco = 8.0;

    return WillPopScope(
      onWillPop: () async {
        if (iniciado || _pontoMandante > 0 || _pontoVisitante > 0) {
          _dialogVoltar();
        } else {
          Navigator.of(context).pop();
        }

        return false;
      },
      child: Scaffold(
        appBar: AppBar(toolbarHeight: 0),
        body: SingleChildScrollView(
          child: Column(
            children: [
              PadraoAppbar(
                callback: () => _dialogInfo(),
                texto: PLACAR_CRONOMETRO,
              ),
              Row(
                children: [
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: Text(
                        '${_periodo.toString()}° $TEMPO',
                        style: const TextStyle(
                          color: UiCor.periodo,
                          fontSize: 24,
                          fontWeight: FontWeight.normal,
                          fontFamily: 'display',
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: espaco),
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: cronometro(),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: espaco),
              Row(
                children: [
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: Text(
                        currentDefinir.value.mandante,
                        style: const TextStyle(
                          overflow: TextOverflow.ellipsis,
                          color: UiCor.mandante,
                          fontSize: 24,
                          fontWeight: FontWeight.normal,
                          fontFamily: 'display',
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: espaco),
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: Text(
                        currentDefinir.value.visitante,
                        style: const TextStyle(
                          overflow: TextOverflow.ellipsis,
                          color: UiCor.visitante,
                          fontSize: 24,
                          fontWeight: FontWeight.normal,
                          fontFamily: 'display',
                        ),
                      ),
                    ),
                  )
                ],
              ),
              const SizedBox(height: espaco),
              Row(
                children: [
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: Text(
                        _pontoMandante.toString(),
                        style: TextStyle(
                          color: UiCor.mandante,
                          fontSize: width * 0.2,
                          fontFamily: 'display',
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: espaco),
                  Container(
                    width: sizeMetade,
                    color: UiCor.display,
                    padding: const EdgeInsets.all(16),
                    child: Center(
                      child: Text(
                        _pontoVisitante.toString(),
                        style: TextStyle(
                          color: UiCor.visitante,
                          fontSize: width * 0.2,
                          fontWeight: FontWeight.normal,
                          fontFamily: 'display',
                        ),
                      ),
                    ),
                  )
                ],
              ),
              const SizedBox(height: espaco),
              Row(
                children: [
                  SegundoButton(
                    callback: () => _alterarPeriodo(_periodo),
                    cor: UiCor.periodo,
                    icone: Icons.timer,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => iniciarCronometro(),
                    cor: UiCor.tempo,
                    desabilitado: _desabilitarIniciar(),
                    icone: Icons.play_arrow,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => pausarCronometro(),
                    cor: UiCor.tempo,
                    desabilitado: _desabilitarPausar(),
                    icone: Icons.pause,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => pararCronometro(),
                    cor: UiCor.tempo,
                    desabilitado: _desabilitarParar(),
                    icone: Icons.stop,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => _dialogReiniciar(),
                    cor: UiCor.linha,
                    icone: Icons.restart_alt,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => context.push(RoutesEnum.DEFINIR.value),
                    cor: const Color(0xFFFFFFFF),
                    icone: Icons.settings,
                    size: sizeIcone,
                  ),
                ],
              ),
              const SizedBox(height: espaco),
              Row(
                children: [
                  SegundoButton(
                    callback: () => _aumentarPontoMandante(),
                    cor: UiCor.mandante,
                    duplo: true,
                    icone: Icons.plus_one,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => _diminuirPontoMandante(),
                    cor: UiCor.mandante,
                    icone: Icons.remove,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => _diminuirPontoVisitante(),
                    cor: UiCor.visitante,
                    icone: Icons.remove,
                    size: sizeIcone,
                  ),
                  SegundoButton(
                    callback: () => _aumentarPontoVisitante(),
                    cor: UiCor.visitante,
                    duplo: true,
                    icone: Icons.plus_one,
                    size: sizeIcone,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget cronometro() {
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
