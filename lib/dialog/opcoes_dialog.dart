import 'package:flutter/material.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';
import 'package:selecao_app/theme/ui_tamanho.dart';

class OpcoesDialog extends StatefulWidget {
  const OpcoesDialog({
    super.key,
    required Function callback,
    IconData? icone,
    IconData? iconeAtivo,
    required String texto,
    required String titulo,
  })  : _callback = callback,
        _icone = icone,
        _iconeAtivo = iconeAtivo,
        _texto = texto,
        _titulo = titulo;

  final Function _callback;
  final IconData? _icone;
  final IconData? _iconeAtivo;
  final String _texto;
  final String _titulo;

  @override
  State<OpcoesDialog> createState() => _OpcoesDialogState();
}

class _OpcoesDialogState extends State<OpcoesDialog> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Row(
        children: [
          const Icon(
            Icons.warning_amber,
            color: UiCor.principal,
          ),
          const SizedBox(width: 16),
          TitleMediumText(
            texto: widget._titulo,
            cor: UiCor.principal,
          ),
        ],
      ),
      content: SingleChildScrollView(
        child: ListBody(
          children: [
            Text(
              widget._texto,
              style: const TextStyle(
                color: UiCor.principal,
                fontSize: 16,
                fontWeight: FontWeight.normal,
              ),
            ),
          ],
        ),
      ),
      actions: [
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            PrimeiroButton(
              callback: () => widget._callback(false),
              cor: const Color(0xFF0C2D54),
              icone: widget._icone ?? Icons.highlight_off,
              iconeAtivo: widget._iconeAtivo ?? Icons.cancel,
              iconeCor: UiCor.principal,
              size: UiTamanho.botaoDialog,
            ),
            const SizedBox(width: 16),
            PrimeiroButton(
              callback: () => widget._callback(true),
              size: UiTamanho.botaoDialog,
            ),
          ],
        ),
      ],
    );
  }
}
