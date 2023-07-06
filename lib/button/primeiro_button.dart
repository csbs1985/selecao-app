import 'package:flutter/material.dart';

class PrimeiroButton extends StatefulWidget {
  const PrimeiroButton({
    super.key,
    required Function callback,
    required Color cor,
    IconData? icone,
    IconData? iconeAtivo,
    double? size,
  })  : _callback = callback,
        _cor = cor,
        _icone = icone,
        _iconeAtivo = iconeAtivo,
        _size = size;

  final Function _callback;
  final Color _cor;
  final IconData? _icone;
  final IconData? _iconeAtivo;
  final double? _size;

  @override
  State<PrimeiroButton> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<PrimeiroButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final size = width / 5;

    return GestureDetector(
      onTapDown: (_) => setState(() => isPressed = true),
      onTapUp: (_) => setState(() => isPressed = false),
      onTapCancel: () => setState(() => isPressed = false),
      onTap: () => widget._callback(),
      child: Container(
        width: widget._size ?? size,
        height: widget._size ?? size,
        color: widget._cor,
        child: Center(
          child: Icon(
            isPressed
                ? widget._iconeAtivo ?? Icons.arrow_circle_right
                : widget._icone ?? Icons.arrow_circle_right_outlined,
            size: (widget._size ?? size) * 0.5,
            color: const Color(0xFF0C2D54),
          ),
        ),
      ),
    );
  }
}
