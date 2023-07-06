import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/numero_button.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/class/routes_class.dart';
import 'package:selecao_app/class/selecionar_class.dart';
import 'package:selecao_app/config/value_notifier_config.dart';
import 'package:selecao_app/dialog/simples_dialog.dart';
import 'package:selecao_app/input/jogadores_input.dart';
import 'package:selecao_app/widget/info_selecionar_widget.dart';

class SelecaoPage extends StatefulWidget {
  const SelecaoPage({super.key});

  @override
  State<SelecaoPage> createState() => _SelecaoPageState();
}

class _SelecaoPageState extends State<SelecaoPage> {
  final SelecionarClass _selecionarClass = SelecionarClass();

  bool _isToggleContainer = false;

  void _toggleContainer() {
    setState(() => _isToggleContainer = !_isToggleContainer);
  }

  void _selecionarNumero(String numero) {
    setState(() => currentNumEquipe.value = numero);
  }

  void _validarTimes() {
    !_selecionarClass.validarTimes(currentNumEquipe.value)
        ? _showAlertDialog()
        : context.push(RoutesEnum.TIMES.value);
  }

  Future<void> _showAlertDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return const SimplesDialog();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => _toggleContainer()),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            InfoSelecionarWidget(isToggle: _isToggleContainer),
            JogadoresInput(callback: (value) => currentJogadores.value = value),
            NumeroButton(callback: (value) => _selecionarNumero(value)),
            PrimeiroButton(
              cor: const Color(0xFFC8F51B),
              callback: () => _validarTimes(),
            ),
          ],
        ),
      ),
    );
  }
}
