import React from 'react';
import { FaClipboardList, FaSchool } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import '../styles/Experience.css'

function Experience(){
    return (
        <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2011"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Colegio Mixto Nuestra Patria
            </h3>
            <p>Bachillerato en Computación</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Universidad de San Carlos de Guatemala
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
              Facultad de Ingeniería
            </h4>
  
            <p>Ingeniería Electrónica</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011-2014"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FaClipboardList />}
          >
            <h3 className="vertical-timeline-element-title">
              Renap
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Miguel Petapa
            </h4>
            <p>Tabulador</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FaClipboardList />}
          >
            <h3 className="vertical-timeline-element-title">
              Técnico Eléctricista
            </h3>
            
            <p>
                Diseño de instalaciones eléctricas
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
};

export default Experience;