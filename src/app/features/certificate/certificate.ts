import { Component } from '@angular/core';
import { ProjectCard } from "../../shared/project-card/project-card";

@Component({
  selector: 'app-certificate',
  imports: [ProjectCard],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate {
  protected readonly certificate = [
    {
      title: 'CISCO: Introduction to Cybersecurity',
      image: "images/Introduction_to_Cybersecurity_certificate_gomelan-leilorenzxavier-dnsc-edu-ph_68ec1cd8-a6b0-40f7-b696-169bca2a3a7d.png",
      tags: ['Kali Linux', 'Hashcat', 'Recon-ng', 'Nmap', 'Metasploit'],
    },
    {
      title: 'CISCO: Getting Started with CISCO Packet Tracer',
      image: "images/Getting_Started_with_Cisco_Packet_Tracer_certificate_gomelan-leilorenzxavier-dnsc-edu-ph_2c335c4e-0f2c-483e-92ae-68932065424c.png",
      tags: ['Networking', 'Network Architecture', 'Network Protocols', 'Network Security'],
    },
    {
      title: 'Advanced Seminar Day 1',
      image: "images/GOMELAN, LEI LORENZ XAVIER A (1).png",
      tags: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    },
    {
      title: 'Advanced Seminar Day 2',
      image: "images/GOMELAN, LEI LORENZ XAVIER A.png",
      tags: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    },
    {
      title: 'Trilogi: User Experience Questionnaire Instruments',
      image: "images/Lei Lorenz Xavier A Gomelan.png",
      tags: ['System Documentation', 'User Manual', 'User Experience', 'User Interface'],
    },
  ];
}
