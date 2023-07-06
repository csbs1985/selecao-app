import 'package:flutter/material.dart';

class TitleMediumText extends StatelessWidget {
  const TitleMediumText({
    super.key,
    required Color cor,
    required String texto,
  })  : _cor = cor,
        _texto = texto;

  final Color _cor;
  final String _texto;

  @override
  Widget build(BuildContext context) {
    return Text(
      _texto,
      style: TextStyle(
        color: _cor,
        fontSize: 24,
        fontWeight: FontWeight.normal,
      ),
    );
  }
}
