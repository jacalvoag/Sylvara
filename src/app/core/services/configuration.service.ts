import { Injectable} from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Configuration } from "../models/configuration.model";

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private mockConfiguration: Configuration = {
        id: 1,
        name: "Omar Selvas",
        bio: "Apasionado por la conservación y el estudio de la biodiversidad. Ingeniero Ambiental con experiencia en proyectos de investigación y monitoreo ecológico.",
        phonenumber: 1234567890,
        password: "securepassword123",
        location: "Ciudad de México, México",
        email: "omarselvas153@gmail.com"
    };




}