import 'package:flutter/material.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/theme/ui_tamanho.dart';

class SimplesDialog extends StatefulWidget {
  const SimplesDialog({super.key});

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
      backgroundColor: Colors.red,
      title: const Text(
        SELECIONAR_NUMERO_ERRO,
        style: TextStyle(
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.normal,
        ),
      ),
      content: const SingleChildScrollView(
        child: ListBody(
          children: [
            Text(
              SELECIONAR_NUMERO_ERRO_DESCRICAO,
              style: TextStyle(
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
                    isPressed ? Icons.cancel : Icons.highlight_off,
                    size: UiTamanho.botaoDialog,
                    color: Colors.red,
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
