import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:selecao_app/class/routes_class.dart';

class InicioPage extends StatefulWidget {
  const InicioPage({super.key});

  @override
  State<InicioPage> createState() => _InicioPageState();
}

class _InicioPageState extends State<InicioPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Seleção")),
      body: Container(
        child: Column(
          children: [
            IconButton(
              onPressed: () => context.push(RoutesEnum.SELECIONAR.value),
              icon: const Icon(Icons.abc),
            ),
            IconButton(
              onPressed: () => context.push(RoutesEnum.PLACAR.value),
              icon: const Icon(Icons.abc),
            ),
          ],
        ),
      ),
    );
  }
}
