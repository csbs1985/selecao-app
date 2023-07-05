import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/config/tema_config.dart';
import 'package:selecao_app/model/menu_model.dart';
import 'package:selecao_app/theme/ui_cor.dart';
import 'package:selecao_app/theme/ui_icone.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:selecao_app/widget/item_menu_widget.dart';

class InicioPage extends StatefulWidget {
  const InicioPage({super.key});

  @override
  State<InicioPage> createState() => _InicioPageState();
}

class _InicioPageState extends State<InicioPage> {
  final TemaConfig _temaConfig = TemaConfig();

  PackageInfo _packageInfo = PackageInfo(
    appName: 'Unknown',
    packageName: 'Unknown',
    version: 'Unknown',
    buildNumber: 'Unknown',
    buildSignature: 'Unknown',
    installerStore: 'Unknown',
  );

  @override
  void initState() {
    _definirVersao();
    _temaConfig.definirTemaInicio();
    super.initState();
  }

  Future<void> _definirVersao() async {
    final info = await PackageInfo.fromPlatform();
    setState(() => _packageInfo = info);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: UiCor.amarelo,
      appBar: AppBar(toolbarHeight: 0),
      body: Container(
        padding: const EdgeInsets.fromLTRB(24, 24, 24, 8),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            SvgPicture.asset(UiIcone.logo),
            const SizedBox(height: 40),
            SvgPicture.asset(UiIcone.identidade),
            const SizedBox(height: 40),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                for (var item in MenuModel.listaMenu) ItemMenuWidget(item: item)
              ],
            ),
            const SizedBox(height: 40),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  BY,
                  style: Theme.of(context).textTheme.displaySmall,
                ),
                Text(
                  'v${_packageInfo.version}',
                  style: Theme.of(context).textTheme.displaySmall,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
