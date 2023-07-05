import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/numero_button.dart';
import 'package:selecao_app/input/jogadores_input.dart';
import 'package:selecao_app/widget/info_selecionar_widget.dart';

class SelecaoPage extends StatefulWidget {
  const SelecaoPage({super.key});

  @override
  State<SelecaoPage> createState() => _SelecaoPageState();
}

class _SelecaoPageState extends State<SelecaoPage> {
  bool _isToggleContainer = false;
  String _numeroSelecionado = "5";

  void _toggleContainer() {
    setState(() => _isToggleContainer = !_isToggleContainer);
  }

  _selecionarNumero(String numero) {
    setState(() => _numeroSelecionado = numero);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => _toggleContainer()),
      body: SingleChildScrollView(
        child: Column(
          children: [
            InfoSelecionarWidget(isToggle: _isToggleContainer),
            const JogadoresPadraoInput(
              hintText: "Jogadores...",
            ),
            NumeroButton(callback: (value) => _selecionarNumero(value)),
          ],
        ),
      ),
    );
  }
}
