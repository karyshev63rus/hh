import React from 'react'

const Info = () => {
    return(
        <div className='content'>
            <div className='info-analytics pt-3'>
                <h3 className='info-analytics-title'>Основная информация о проекте</h3>
                <hr/>
            <div className='info-analytics-text my-3'>
                <p>Возможности проекта позволяют решать следующие задачи:</p>
                <p className='ms-5'>Поиск вакансий разработчиков программного обеспечения на базе API &nbsp;
                <a className='info-analytics-link' target='_blank' href='https://api.hh.ru/' rel='noopener noreferrer'>
                    hh.ru</a>
                </p>
                <p className='ms-5'>Анализ вакансий на рынке труда разработчиков ПО <i>(в разработке)</i></p>
                <p>Это учебный проект, демонстрирующий владение следующими технологиями веб-разработки:</p>
                <div className='ms-5 my-2'>бэкенд основан на фреймворках &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://django.fun' rel='noopener noreferrer'>
                    Django</a>&nbsp;
                    & &nbsp;<a className='info-analytics-link' target='_blank' href='https://www.django-rest-framework.org' rel='noopener noreferrer'>
                    DRF</a>
                </div>
                <div className='ms-5 my-3'>фронтенд построен на компонентах библиотеки &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://ru.reactjs.org/' rel='noopener noreferrer'>
                    React</a>
                </div>
                <div className='ms-5 my-3'>система управления базой данных &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://www.postgresqltutorial.com' rel='noopener noreferrer'>
                    Postgresql</a>
                </div>
                <div className='ms-5 my-3'>внешний вид обеспечен &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://bootstrap-4.ru/' rel='noopener noreferrer'>
                    Bootstrap</a>
                </div>
                <div className='ms-5 my-3'>разработка и экплуатация происходит в контейнерах &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://docs.docker.com' rel='noopener noreferrer'>
                    Docker</a>
                </div>
                <div className='ms-5 my-3'>доставка и развертывание проекта осуществляется посредством &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://gitlab.com' rel='noopener noreferrer'>
                    Gitlab</a>
                </div>
                <div> Код базовой версии проекта доступен на &nbsp;
                    <a className='info-analytics-link' target='_blank' href='https://github.com' rel='noopener noreferrer'>
                    GitHub</a>
                </div>                
            </div>
            </div>
        </div>
    )
}

export default Info
