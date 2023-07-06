import 'package:flutter/material.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class TextoButton extends StatefulWidget {
  const TextoButton({
    super.key,
    required Function callback,
    required Color cor,
    IconData? icone,
    IconData? iconeAtivo,
    required String texto,
  })  : _callback = callback,
        _cor = cor,
        _icone = icone,
        _iconeAtivo = iconeAtivo,
        _texto = texto;

  final Function _callback;
  final Color _cor;
  final IconData? _icone;
  final IconData? _iconeAtivo;
  final String _texto;

  @override
  State<TextoButton> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<TextoButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final size = width / 5;

    return Row(
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
            child: TitleMediumText(cor: widget._cor, texto: widget._texto),
          ),
        ),
        GestureDetector(
          onTapDown: (_) => setState(() => isPressed = true),
          onTapUp: (_) => setState(() => isPressed = false),
          onTapCancel: () => setState(() => isPressed = false),
          onTap: () => widget._callback(),
          child: Container(
            width: size,
            height: size,
            color: widget._cor,
            child: Center(
              child: Icon(
                isPressed
                    ? widget._iconeAtivo ?? Icons.arrow_circle_right
                    : widget._icone ?? Icons.arrow_circle_right_outlined,
                size: 48,
                color: UiCor.iconeInicio,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
