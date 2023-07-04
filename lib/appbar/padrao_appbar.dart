import 'package:flutter/material.dart';
import 'package:selecao_app/button/icone_button.dart';

class PadraoAppbar extends StatefulWidget implements PreferredSizeWidget {
  const PadraoAppbar({
    super.key,
    required Function callback,
    required String texto,
  })  : _callback = callback,
        _texto = texto;

  final Function _callback;
  final String _texto;

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
        icone: Icons.arrow_back_rounded,
      ),
      title: Text(widget._texto),
      actions: [
        IconeButton(
          callback: () => widget._callback(),
          icone: Icons.info_outline,
        )
      ],
    );
  }
}
