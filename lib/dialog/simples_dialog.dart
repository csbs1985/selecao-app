import 'package:flutter/material.dart';
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
      shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.zero)),
      actionsPadding: const EdgeInsets.all(16),
      backgroundColor: const Color(0xFF0C2D54),
      title: Text(
        widget._titulo,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.normal,
        ),
      ),
      content: SingleChildScrollView(
        child: ListBody(
          children: [
            Text(
              widget._texto,
              style: const TextStyle(
                color: Colors.white,
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
            GestureDetector(
              onTapDown: (_) => setState(() => isPressed = true),
              onTapUp: (_) => setState(() => isPressed = false),
              onTapCancel: () => setState(() => isPressed = false),
              onTap: () => Navigator.of(context).pop(),
              child: Container(
                width: UiTamanho.botaoDialog,
                height: UiTamanho.botaoDialog,
                color: Colors.white,
                child: Center(
                  child: Icon(
                    isPressed
                        ? (widget._iconeAtivo ?? Icons.cancel)
                        : (widget._icone ?? Icons.highlight_off),
                    size: UiTamanho.botaoDialog,
                    color: const Color(0xFF0C2D54),
                  ),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
