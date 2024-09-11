import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CourseSelectionComponent } from './pages/course-selection/course-selection.component';
import { EnrollmentConfirmationComponent } from './pages/enrollment-confirmation/enrollment-confirmation.component';
import { EnrolledScheduleComponent } from './pages/enrolled-schedule/enrolled-schedule.component';
import { SchedulePreviewComponent } from './pages/schedule-preview/schedule-preview.component';
import { ScheduleSimulationComponent } from './pages/schedule-simulation/schedule-simulation.component';
import { EnrollmentGuideComponent } from './pages/enrollment-guide/enrollment-guide.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent},
    { path: "course-selection", component: CourseSelectionComponent},
    { path: "enrollment-confirmation", component: EnrollmentConfirmationComponent},
    { path: "enrolled-schedule", component: EnrolledScheduleComponent},
    { path: "not-found", component: LoginComponent},
    { path: "schedule-preview", component: SchedulePreviewComponent},
    { path: "schedule-simulation", component: ScheduleSimulationComponent},
    { path: "enrollment-guide", component: EnrollmentGuideComponent}
];
