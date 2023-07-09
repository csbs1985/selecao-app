import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/numero_button.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/class/lista_class.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/config/value_notifier_config.dart';
import 'package:selecao_app/dialog/simples_dialog.dart';
import 'package:selecao_app/input/texto_input.dart';
import 'package:selecao_app/model/definir_model.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class DefinirPage extends StatefulWidget {
  const DefinirPage({super.key});

  @override
  State<DefinirPage> createState() => _DoarPageState();
}

class _DoarPageState extends State<DefinirPage> {
  final ListaClass _listaClass = ListaClass();

  String _mandante = currentDefinir.value.mandante;
  String _visitante = currentDefinir.value.visitante;
  int _periodo = currentDefinir.value.periodo;
  int _tempo = currentDefinir.value.tempo;

  Future<void> _dialogInfo() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return const SimplesDialog(
          titulo: COMO_USAR,
          texto: DEFINIR_INSTRUCAO,
        );
      },
    );
  }

  void _definirPartida() {
    DefinirModel partida = DefinirModel(
      mandante: _mandante ?? MANDANTE,
      visitante: _visitante ?? VISITANTE,
      tempo: _tempo,
      periodo: _periodo,
    );

    currentDefinir.value = partida;
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            PadraoAppbar(
              callback: () => _dialogInfo(),
              texto: DEFINIR_PARTIDA,
            ),
            const SizedBox(height: 16),
            const Padding(
              padding: EdgeInsets.fromLTRB(16, 0, 16, 16),
              child: TitleMediumText(
                cor: UiCor.mandante,
                texto: MANDANTE_EQUIPE,
              ),
            ),
            TextoInput(
              callback: (value) => _mandante = value,
              controller:
                  TextEditingController(text: currentDefinir.value.mandante),
              cor: UiCor.mandante,
              hint: MANDANTE,
            ),
            const Padding(
              padding: EdgeInsets.all(16),
              child: TitleMediumText(
                cor: UiCor.visitante,
                texto: VISITANTE_EQUIPE,
              ),
            ),
            TextoInput(
              callback: (value) => _visitante = value,
              controller:
                  TextEditingController(text: currentDefinir.value.visitante),
              cor: UiCor.visitante,
              hint: VISITANTE,
            ),
            NumeroButton(
              callback: (value) => _periodo = value,
              cor: UiCor.periodo,
              inicial: currentDefinir.value.periodo,
              lista: _listaClass.listaQtdPeriodos,
              texto: PERIODO_SELECIONAR,
            ),
            NumeroButton(
              callback: (value) => _tempo = value,
              cor: UiCor.tempo,
              inicial: currentDefinir.value.tempo,
              lista: _listaClass.listaDuracaoTempo,
              texto: TEMPO_SELECIONAR,
            ),
            PrimeiroButton(
              callback: () => _definirPartida(),
              full: true,
            ),
          ],
        ),
      ),
    );
  }
}
