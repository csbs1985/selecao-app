import 'package:go_router/go_router.dart';
import 'package:selecao_app/class/routes_class.dart';
import 'package:selecao_app/page/definir_page.dart';
import 'package:selecao_app/page/doar_Page.dart';
import 'package:selecao_app/page/inicio_page.dart';
import 'package:selecao_app/page/partida_page.dart';
import 'package:selecao_app/page/placar_page.dart';
import 'package:selecao_app/page/selecionar_page.dart';
import 'package:selecao_app/page/times_page.dart';

final GoRouter routes = GoRouter(
  debugLogDiagnostics: true,
  initialLocation: RoutesEnum.INICIO.value,
  routes: [
    GoRoute(
      path: RoutesEnum.DEFINIR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const DefinirPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.DOAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const DoarPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.INICIO.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const InicioPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.PARTIDA.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const PartidaPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.PLACAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const PlacarPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.SELECIONAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const SelecionarPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.TIMES.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const TimesPage(),
      ),
    ),
  ],
);
