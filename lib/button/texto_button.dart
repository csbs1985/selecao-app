import 'package:flutter/material.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/text/title_medium_text.dart';

class TextoButton extends StatefulWidget {
  const TextoButton({
    super.key,
    required Function callback,
    required Color cor,
    IconData? icone,
    IconData? iconeAtivo,
    double? size,
    required String texto,
  })  : _callback = callback,
        _cor = cor,
        _icone = icone,
        _iconeAtivo = iconeAtivo,
        _size = size,
        _texto = texto;

  final Function _callback;
  final Color _cor;
  final IconData? _icone;
  final IconData? _iconeAtivo;
  final double? _size;
  final String _texto;

  @override
  State<TextoButton> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<TextoButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
            child: TitleMediumText(cor: widget._cor, texto: widget._texto),
          ),
        ),
        PrimeiroButton(
          cor: widget._cor,
          callback: () => widget._callback(),
          icone: widget._icone,
          iconeAtivo: widget._iconeAtivo,
          size: widget._size,
        ),
      ],
    );
  }
}
