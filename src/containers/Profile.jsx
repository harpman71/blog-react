import React, {useContext} from 'react';
import Contact from '../components/Contact';
import AppContext from '../context/AppContext'

const Profile = () => {
    const { profile, projects } = useContext(AppContext);

    return (
        <main>
            <section className="profile-main-container">
                <div className="grid-container profile-container">
                    <div>
                        <img src={profile.image} alt=""/>
                    </div>
                    <div>
                        <h2>Hola, mi nombre es {profile.name}</h2>
                        <p>{profile.about.substring(0, 700)}</p>
                    </div>
                </div>
            </section>
            <section className="profile-main-projects">
                <div className="grid-container">
                    <h3>Proyectos</h3>
                    <div className="projects-main-container">
                        {
                        projects.map(item=>
                            (
                            <article key={item.title} className="project-container">
                                <h4>{item.title}</h4>
                                <p>{item.description.substring(0, 700)}</p>
                            </article> 
                            ) 
                        )}                    
                    </div>
                </div>
            </section>
            <Contact/>
        </main>
    );
}
 
export default Profile;