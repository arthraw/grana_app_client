import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { TermsComponent } from "./components/terms/terms.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'terms',
        component: TermsComponent,
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    }
]