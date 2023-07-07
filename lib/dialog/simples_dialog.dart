import 'package:flutter/material.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';
import 'package:selecao_app/theme/ui_tamanho.dart';

class SimplesDialog extends StatefulWidget {
  const SimplesDialog({
    super.key,
    IconData? icone,
    IconData? iconeAtivo,
    required String texto,
    required String titulo,
  })  : _icone = icone,
        _iconeAtivo = iconeAtivo,
        _texto = texto,
        _titulo = titulo;

  final IconData? _icone;
  final IconData? _iconeAtivo;
  final String _texto;
  final String _titulo;

  @override
  State<SimplesDialog> createState() => _OpcoesDialogState();
}

class _OpcoesDialogState extends State<SimplesDialog> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: TitleMediumText(
        texto: widget._titulo,
        cor: UiCor.principal,
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
              cor: UiCor.principal,
              callback: () => Navigator.of(context).pop(),
              icone: widget._icone ?? Icons.highlight_off,
              iconeAtivo: widget._iconeAtivo ?? Icons.cancel,
              size: UiTamanho.botaoDialog,
            ),
          ],
        ),
      ],
    );
  }
}
