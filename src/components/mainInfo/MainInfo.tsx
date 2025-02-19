import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const MainInfo: React.FC = () => {
    // step: 0 - первый экран с вопросом и ответами
    // step: 1 - второй экран с правильным ответом, аудио и текстом
    // step: 2 - третий экран с информацией о Рождественской улице
    const [step, setStep] = useState<number>(0);
    const [format, setFormat] = useState<string>("");

    const handleAnswerClick = () => {
        // Переходим на второй экран после ответа
        setStep(1);
    };

    const handleContinueClickFromSecond = () => {
        // Переходим на третий экран после второго экрана
        setStep(2);
    };

    const handleContinueFromThird = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(3);
    };
    const handleContinueFrom4 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(4);
    };
    const handleContinueFrom5 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(5);
    };
    const handleContinueFrom6 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(6);
    };
    const handleContinueFrom7 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(7);
    };
    const handleContinueFrom8 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(8);
    };
    const handleContinueFrom9 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(9);
    };
    const handleContinueFrom10 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(10);
    };
    const handleContinueFrom11 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(0);
    };


    return (
        <div className="w-full bg-white py-[50px] pb-[100px] shadow-muuu rounded-[40px] mx-[120px] my-[50px]">
            {step === 0 && (
                // Первый экран: вопрос с выбором ответа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Что за человек изображен на фото?
                        </p>
                    </div>
                    <div className="flex justify-center items-start m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Gorkiy.jpeg"
                            alt="Gorkiy"
                            className="w-[300px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        {/* Панель выбора */}
                        <div className="flex flex-col gap-[20px] ml-[90px]">
                            <div className="flex gap-[20px] ">
                                {/* Пушкин */}
                                <div
                                    onClick={() => setFormat("pushkin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[90px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'pushkin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Александр Пушкин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'pushkin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-[#777]">
                                            Писатель, поэт, автор литературной классики
                                        </p>
                                    </div>
                                </div>

                                {/* Горький */}
                                <div
                                    onClick={() => setFormat("gorkiy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[115px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'gorkiy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Максим Горький
                                            </h2>
                                            <div
                                                className={`h-[18px] text-end w-[18px] border-2 rounded-full mt-[5px] transition-colors flex justify-center items-center ${
                                                    format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'gorkiy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Алеша Пешков, писатель
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[30px]">
                                {/* Толстой */}
                                <div
                                    onClick={() => setFormat("tolstoy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'tolstoy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Лев толстой
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] mt-[5px] ml-[170px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'tolstoy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Писатель, автор "Война и мир"
                                        </p>
                                    </div>
                                </div>

                                {/* Минин */}
                                <div
                                    onClick={() => setFormat("minin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'minin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Кузьма Минин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[17.5px] ml-[150px] mt-[5px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'minin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Ополченец
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-[30px]">
                                <Button
                                    onClick={handleAnswerClick}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px]  hover:bg-[#cf0c0c ] transition"
                                >
                                    Ответить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 1 && (
                // Второй экран: правильный ответ, аудио, текст (без изменений)
                <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <p className="text-[30px] font-semibold opacity-70">
                        Правильный ответ: Максим Горький
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <audio controls className="outline-none">
                                <source src="/aaa.wav" type="audio/wav"/>
                                Ваш браузер не поддерживает аудио элемент.                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <div className="mt-[20px] text-center">
                            <p className="text-[#777]">
                                Вот тут какой-то мой текст, объяснение почему это Горький, какая была логика и почему так.
                                Добавим ещё детальную информацию и так далее...
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full justify-end mt-[30px] pr-[120px]">
                        <Button
                            onClick={handleContinueClickFromSecond}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>
                </div>
            )}

            {step === 2 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Рождественская улица
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Screenshot_20241208_233054.png"
                            alt="Rozda"
                            className="w-[400px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <img
                            src="/Screenshot_20241208_233458.png"
                            alt="Rozda"
                            className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Сама улица Рождественская хранит в себе множество тайн. Здесь обитают
                                разномастные призраки. Почти у каждого дома есть своя легенда, но самая поэтичная
                                и убедительная конечно же «Пиковая дама» <br/>
                                «2 сентября 1833 года Нижний Новгород посетил А.С. Пушкин. На улице
                                Рождественская он видел дом С.В. Строгановой, дочери княгини Голицыной,
                                послужившей прообразом Пиковой дамы»
                            </p>
                            <div className="flex w-full justify-end mt-[100px] pr-[50px]">
                                <Button
                                    onClick={handleContinueFromThird}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                                >
                                    Продолжить
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {step === 3 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            «2 сентября 1833 года Нижний Новгород посетил А.С. Пушкин. На улице
                            Рождественская он видел дом С.В. Строгановой, дочери княгини Голицыной,
                            послужившей прообразом Пиковой дамы»
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Screenshot_20241208_234351.png"
                            alt="Rozda"
                            className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Именно так звучит надпись на фасаде здания. И всё же какое отношение имеет
                                Пушкин к усадьбе Строгановых?
                                По пути в Оренбург в сентябре 1833 года, поэт провел два дня в Нижнем Новгороде.
                                Именно вдохновившись историей усадьбы он написал знаменитую повесть .
                                Наталья Голицына , мать Софии Строгановой, известная как усатая княгиня, очень
                                любила азартные игры. Однажды, будучи в Париже она проиграла в карты всё своё
                                состояние. Сначала она впала в отчаяние, но вскоре сумела отыграться. В этом ей
                                помог некий граф Сен-Жермен. По легенде княгиня продала душу дьяволу, приятелю
                                графа за счастливую комбинацию-тройка, семёрка, туз. Однако тяжесть
                                ответственности легла на плечи её дочери-Софии Строгановой. В 1814 году погиб её
                                сын, а ровно через три года и муж. По одной из версий она же и рассказала писателю
                                эту историю, передав проклятье уже ему. Пушкин погиб на дуэли через три года после
                                выпуска «Пиковой дамы». Но на этом совпадения не заканчиваются. Ещё через три
                                года от холеры скончался Чайковский, поставивший пьесу по мотивам повести. Но, к
                                счастью через аудио гиды проклятье не передаётся, так что беспокоиться не о чем.
                                Если вы конечно не станете играть в азартные игры. Но вы можете побеспокоиться за
                                автора. Мы переписывали этот текст сначала 3 раза, потом 7, потом туз…Даже без
                                помощи дьявола!
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                                <source src="/Пиковая дама-enhanced-v2.wav" type="audio/wav"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom4}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 4 && (
                // Первый экран: вопрос с выбором ответа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Кто поставил пьесу по мотивам повести Пушкина «Пиковая дама»? </p>
                    </div>
                    <div className="flex justify-center items-start m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/photo_2024-12-08_23-53-21.jpg"
                            alt="Gorkiy"
                            className="w-[270px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        {/* Панель выбора */}
                        <div className="flex flex-col gap-[20px] ml-[90px]">
                            <div className="flex gap-[20px] ">
                                {/* Пушкин */}
                                <div
                                    onClick={() => setFormat("pushkin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[90px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'pushkin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Чайковский Петр И.
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'pushkin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-[#777]">
                                            Чувак отец русской демократии просто о май гад бьюти джуси на тусе
                                        </p>
                                    </div>
                                </div>

                                {/* Горький */}
                                <div
                                    onClick={() => setFormat("gorkiy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[115px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'gorkiy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Максим Горький
                                            </h2>
                                            <div
                                                className={`h-[18px] text-end w-[18px] border-2 rounded-full mt-[5px] transition-colors flex justify-center items-center ${
                                                    format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'gorkiy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Алеша Пешков тоже норм тип но ответ точно не он
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[30px]">
                                {/* Толстой */}
                                <div
                                    onClick={() => setFormat("tolstoy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'tolstoy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Лев толстой
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] mt-[5px] ml-[170px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'tolstoy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Такую здоровую тему написал, что я не стал читать
                                        </p>
                                    </div>
                                </div>

                                {/* Минин */}
                                <div
                                    onClick={() => setFormat("minin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'minin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Кузьма Минин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[17.5px] ml-[150px] mt-[5px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'minin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Чувак фул Россию защитил, не тип а просто сигма мен
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-[30px]">
                                <Button
                                    onClick={handleContinueFrom5}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px]  hover:bg-[#cf0c0c ] transition"
                                >
                                    Ответить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 5 && (
                // Второй экран: правильный ответ, аудио, текст (без изменений)
                <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <p className="text-[30px] font-semibold opacity-70">
                        Правильный ответ: Чайковский Петр Ильич
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <Play className="w-6 h-6 text-[#bf1313]" />
                            <audio controls className="outline-none">
                                <source src="/audio/sample-voice.mp3" type="audio/mpeg" />
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <div className="mt-[20px] text-center">
                            <p className="text-[#777]">
                                Вот тут какой-то мой текст, объяснение почему это Чайковский, какая была логика и почему так.
                                Добавим ещё детальную информацию и так далее...
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full justify-end mt-[30px] pr-[120px]">
                        <Button
                            onClick={handleContinueFrom6}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>
                </div>
            )}
            {step === 6 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Призрак внебрачной дочери на улице Маркова
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div>
                            <img
                                src="/Screenshot_20250220_002514.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                            />
                            <img
                                src="/Screenshot_20250220_002754.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] mt-[20px] shadow-places_shad"
                            />
                        </div>

                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                На улице Ильинской, в прошлом Краснофлотской, истории более мрачные. Усадьба
                                Маркова, построенная в 1905 году, по праву считается одним из лучших примеров
                                купеческих жилых домов Нижнего Новгорода. Величественное здание в стиле модерна
                                выделяется на фоне других. От большинства купеческих домов XIX века его отличала
                                проработанность и выдержанность в едином стиле всех фасадов. О бывшем хозяине
                                красивого особняка на улице Ильинской ходит немало легенд. Дворник и кучер
                                Арсения Маркова дожили до конца 20 века, и любили рассказывать о своем прежнем
                                работодателе много забавных историй. Одна из них- история о дочери хозяина. По
                                легенде у Маркова была дочь Настя. На лицо она была красива, но хромая и горбатая.
                                Из-за этих недостатков девушка никак не могла найти себе мужа. Настя вела
                                хозяйство, выращивала цветы и жених всё-же появился. Только вот намерения его, как
                                вскоре оказалось, были направлены не на девушку, а на деньги её отца. В 1917
                                произошла революция, и молодой человек сбежал из страны. Настя не выдержала
                                новости и утопилась прямо в свадебном платье. Нашли бедную Настю в камышах у
                                берега. На барельефах здания находится прекрасная девушка, окруженная камышами.
                                Многие думают что это- почтение утопленнице от её отца. А на стене в здании, от
                                ветра колышется портрет Александра Петрова. Информация конечно точная, но как
                                говорил сам Марков, нельзя верить всему, что говорится в аудиогидах. Сами
                                охранники, некоторые преподаватели, а также пациенты студенческой поликлиники,
                                которая когда-то располагалась в усадьбе Маркова, в разное время наблюдали
                                странные видения. Однажды ночью охранник с криками выбежал из здания, увидев,
                                как по мраморной лестнице спускается призрак в белом платье. В другой раз, тоже
                                ночью, из ниши в стене на той самой лестнице упала ваза с сухоцветами, которую
                                никто не трогал несколько лет. При этом ни сквозняков, ни каких-либо животных в
                                помещении не было.
                                Так же рассказывали о том, что в тридцатые годы в подвале усадьбы располагался
                                отдел НКВД. Одна из сотрудниц утверждала, что на стенах там до сих пор можно
                                обнаружить следы от пуль, якобы там проводились расстрелы. Другая уверена, что
                                убийств в здании не было, были лишь допросы. Но, так или иначе, в подвалах дома
                                обитают призраки. Однажды охранник, спустившись вниз, пошел по узкому
                                подвальному коридору, и у него над головой одна за другой стали взрываться
                                лампочки. Стоит ли говорить, как напугался мужчина. Многие уверены, что это и есть
                                призрак покойной Насти. Однако, не пугайтесь, историки и краеведы ни о какой Насте
                                вообще не знают.
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                            <source src="/copy_003D198D-8A86-494A-844A-E59D4F9425D5.mp3" type="audio/mp3"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom7}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 7 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Строгановская церковь
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div>
                            <img
                                src="/Screenshot_20250220_003503.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                            />
                        </div>

                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Одна из самых красивых церквей, не только в Нижнем, но и в других городах
                                является Рождественская церковь. Но какой ценой обошлась мастеру её красота?
                                Версии расходятся, но одно известно точно. Строганов, чьё имя получила церковь,
                                захотел построить храм необыкновенной красоты. Главный строитель безусловно
                                выполнил требование. Все, и стар, и млад, и беден, и джарахов, любовались
                                церковью. Нравилась она и самому Строганову. Тогда, вызвал он к себе главного
                                строителя, и спросил, сможет ли тот построить строение лучше. Строитель, ничего не
                                подозревая, четно ответила, что смог бы. Тогда заказчик взбесился, и немедленно
                                приказал слугам выколоть ему глаза. Услышав это, мастер побежал. Он решился
                                спрятаться от преследователей в церкви и долез до самой колокольни. Слуги не
                                отставали и уже готовы были его схватить, как вдруг случилось чудо. Мастер-чародей
                                превратился в ворона, взмахнул крыльями, полетел за волгу и скрылся из глаз. Кто
                                знает, может именно этот ворон теперь говорит что никогда не построит церковь
                                лучше. Просто что-то не договаривает…
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                                <source src="/copy_8311F5DD-E078-440D-9A54-01CBB483752F.mp3" type="audio/mp3"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom8}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 8 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Дом Каменских
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div>
                            <img
                                src="/Screenshot_20250220_004038.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                            />
                            <img
                                src="/Screenshot_20250220_004137.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] mt-[20px] shadow-places_shad"
                            />
                        </div>

                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                В центре Нижнего Новгорода расположен исторический особняк с колоннами, который
                                со своего возвышенного местоположения созерцает Волгу. Ранее этот изысканный дом
                                принадлежал семье Каменских и величественно украшает Верхне-Волжскую
                                набережную. Рассказываем об истории этого уникального особняка и показываем, как
                                он выглядел столетие назад.
                                В начале XX века был возведен роскошный дом в стиле неоклассицизма, который
                                принадлежал Ольге Каменской, занимавшейся вместе с мужем речным пароходством.
                                Однако жизнь купцов сложилась не легко: муж Ольги, Федор, потерял рассудок. Ольге,
                                яркой и образованной женщине, страстно увлекавшейся фотографией, пришлось
                                посвятить себя уходу за больным мужем. После Октябрьской революции семье
                                Каменских пришлось бежать из Нижнего Новгорода в Москву, оставив за собой
                                заброшенный особняк.
                                Ольга спрятала семейные ценности под лестницей дома в надежде вернуться за ними,
                                но этого не случилось. Она провела оставшиеся дни рядом со своим больным мужем,
                                лишенная богатства и славы. Интересный факт заключается в том, что образ Ольги
                                Каменской послужил одним из прототипов главной героини фильма "Васса" режиссера
                                Глеба Панфилова.
                                В 70-е годы был обнаружен клад Каменских, и особняк был передан во владение
                                муниципальной организации. Во время реставрационных работ были найдены
                                фамильные ценности купцов, которые были переданы в местный краеведческий
                                музей.
                                Согласно городской легенде, на дом Каменских было наложено проклятие бывших
                                владельцев, и иногда ночью можно услышать таинственные звуки, связанные с
                                душами умерших хозяев, что придает особую атмосферу этому заброшенному зданию.
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                                <source src="/copy_55168005-AFA6-4DA0-9907-5A74D040CC8A.mp3" type="audio/mp3"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom9}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 9 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Дом Каменских
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div>

                            <img
                                src="/Screenshot_20250220_004542.png"
                                alt="Rozda"
                                className="w-[450px] h-[370px] rounded-[20px] mt-[20px] shadow-places_shad"
                            />
                        </div>

                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Нижний Новгород славится своим мистическим прошлым и историями о призраках,
                                которые время от времени появляются в заброшенных зданиях. Свидетели
                                утверждают, что призраков видели в разрушенной гостинице "Россия", построенной на
                                древнем погосте. Любители загадочного и сверхъестественного также вспоминают о
                                духах, живущих в усадьбе Каменских. Сегодня я расскажу вам о еще одном загадочном
                                месте в центре города, где, как говорят, обитают души умерших.
                                Блиновский пассаж на улице Рождественской — это здание с более чем столетней
                                историей. Построенный в 1876-1878 годах, он служил торговым центром, где
                                размещались магазины, конторы, телеграф, гостиница с рестораном и склады. В конце
                                XIX — начале XX века Блиновский пассаж считался самым крупным сооружением в
                                Нижнем Новгороде. В советское время верхние этажи дома были переоборудованы в
                                коммунальные квартиры, где до сих пор проживают люди.
                                Внимание к Блиновскому пассажу привлекло видео, появившееся зимой 2012 года, на
                                котором запечатлено привидение, парящее по помещению. На записи с камер
                                внутреннего наблюдения видно, как полупрозрачная белая фигура появляется из
                                дверей, поднимается в воздух и исчезает. Местные охранники утверждают, что это не
                                первый случай появления загадочной призрачной сущности в здании. Иногда
                                свидетели видят плачущую женщину и маленькую девочку в пышном платье,
                                танцующую в коридорах старинного дома.
                                История Блиновского пассажа лишена кровавых легенд и мистических загадок. Мнения
                                жителей Нижнего Новгорода, знакомых с призраками на Рождественской улице,
                                разделились: одни считают, что призраки действительны, другие полагают, что это
                                схема для привлечения туристов. Однако, истина остается загадкой.
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                                <source src="/copy_AC8BA5F9-B48F-49F1-8C67-AA9519F8E7BD.mp3" type="audio/mp3"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom10}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 10 && (
                // Первый экран: вопрос с выбором ответа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Каких призраков видят в пассаже чаще всего?
                        </p>
                    </div>
                    <div className="flex justify-center items-start m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Screenshot_20250220_004501.png"
                            alt="Rozda"
                            className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        {/* Панель выбора */}
                        <div className="flex flex-col gap-[20px] ml-[90px]">
                            <div className="flex gap-[20px] ">
                                {/* Пушкин */}
                                <div
                                    onClick={() => setFormat("pushkin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[90px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'pushkin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Волки
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'pushkin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-[#777]">
                                        </p>
                                    </div>
                                </div>

                                {/* Горький */}
                                <div
                                    onClick={() => setFormat("gorkiy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[115px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'gorkiy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Женщина и маленькая девочка
                                            </h2>
                                            <div
                                                className={`h-[18px] text-end w-[18px] border-2 rounded-full mt-[5px] transition-colors flex justify-center items-center ${
                                                    format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'gorkiy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[30px]">
                                {/* Толстой */}
                                <div
                                    onClick={() => setFormat("tolstoy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'tolstoy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Три маленьких девочки
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] mt-[5px] ml-[170px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'tolstoy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                        </p>
                                    </div>
                                </div>

                                {/* Минин */}
                                <div
                                    onClick={() => setFormat("minin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'minin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Молодая девушка
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[17.5px] ml-[150px] mt-[5px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'minin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-[30px]">
                                <Button
                                    onClick={handleContinueFrom11}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px]  hover:bg-[#cf0c0c ] transition"
                                >
                                    Ответить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainInfo;
