import 'package:flutter/material.dart';

class SegundoButton extends StatefulWidget {
  const SegundoButton({
    super.key,
    required Function callback,
    required Color cor,
    bool? desabilitado,
    bool? duplo,
    IconData? icone,
    required double size,
  })  : _callback = callback,
        _desabilitado = desabilitado,
        _cor = cor,
        _duplo = duplo,
        _icone = icone,
        _size = size;

  final Function _callback;
  final Color _cor;
  final bool? _desabilitado;
  final bool? _duplo;
  final IconData? _icone;
  final double _size;

  @override
  State<SegundoButton> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<SegundoButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => setState(() => isPressed = true),
      onTapUp: (_) => setState(() => isPressed = false),
      onTapCancel: () => setState(() => isPressed = false),
      onTap: () => widget._desabilitado == true ? null : widget._callback(),
      child: Container(
        width: widget._duplo == true ? (widget._size * 2) : widget._size,
        height: widget._size,
        color: widget._desabilitado ?? isPressed
            ? widget._cor.withOpacity(0.7)
            : widget._cor,
        child: Center(
          child: Icon(
            widget._icone,
            size: widget._size * 0.5,
            color: const Color(0xFF0C2D54),
          ),
        ),
      ),
    );
  }
}
