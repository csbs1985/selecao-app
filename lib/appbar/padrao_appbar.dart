import 'package:flutter/material.dart';
import 'package:selecao_app/button/icone_button.dart';

class PadraoAppbar extends StatefulWidget implements PreferredSizeWidget {
  const PadraoAppbar({
    super.key,
    required Function callback,
  }) : _callback = callback;

  final Function _callback;

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  State<PadraoAppbar> createState() => _PadraoAppbarState();
}

class _PadraoAppbarState extends State<PadraoAppbar> {
  void _voltar() {
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: IconeButton(
        callback: () => _voltar(),
        icone: Icons.arrow_circle_left_outlined,
      ),
      actions: [
        IconeButton(
          callback: () => widget._callback(),
          icone: Icons.help_outline,
        )
      ],
    );
  }
}
