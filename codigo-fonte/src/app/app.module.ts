import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { LembretesPage } from '../pages/lembretes/lembretes';
import { CartaoPage } from '../pages/cartao/cartao';
import { ListaDependentesPage } from '../pages/lista-dependentes/lista-dependentes';
import { CadastroLembretesPage } from '../pages/cadastro-lembretes/cadastro-lembretes';
import { DependentePage } from '../pages/cadastro-dependente/dependente';
import { HelpPage } from '../pages/help/help';
import { DependenteProvider } from '../providers/dependente/dependente';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { LembretesProvider } from '../providers/lembretes/lembretes';
import { CadastroLembretesProvider } from '../providers/cadastro-lembretes/cadastro-lembretes';
import { AuthProvider } from '../providers/auth/auth';
<<<<<<< .mine
import { HelpProvider } from '../providers/help/help';
||||||| .r41
=======
import { CartaoProvider } from '../providers/cartao/cartao';
>>>>>>> .r48

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    PerfilUsuarioPage,
    ListaDependentesPage,
    LembretesPage,
    CadastroLembretesPage,
<<<<<<< .mine
    DependentePage,
    HelpPage
||||||| .r41
    DependentePage
=======
    DependentePage,
    CartaoPage
>>>>>>> .r48
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    PerfilUsuarioPage,
    ListaDependentesPage,
    LembretesPage,
    CadastroLembretesPage,
<<<<<<< .mine
    DependentePage,
    HelpPage
||||||| .r41
    DependentePage
=======
    DependentePage,
    CartaoPage
>>>>>>> .r48
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DependenteProvider,
    UsuarioProvider,
    LembretesProvider,
    AuthProvider,
<<<<<<< .mine
    CadastroLembretesProvider,
    HelpProvider
||||||| .r41
    CadastroLembretesProvider
=======
    CadastroLembretesProvider,
    CartaoProvider
>>>>>>> .r48
  ]
})
export class AppModule {}
