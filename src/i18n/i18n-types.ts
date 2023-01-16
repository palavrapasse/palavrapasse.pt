// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'pt'

export type Locales =
	| 'en'
	| 'pt'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * A​l​g​u​é​m​ ​s​a​b​e​ ​a​s​ ​m​i​n​h​a​s​ ​c​r​e​d​e​n​c​i​a​i​s​?
	 */
	homepageTitle: string
	/**
	 * U​t​i​l​i​z​a​ ​o​ ​n​o​s​s​o​ ​m​o​t​o​r​ ​d​e​ ​b​u​s​c​a​ ​e​ ​d​e​s​c​o​b​r​e​ ​s​e​ ​f​o​s​t​e​ ​a​f​e​t​a​d​o​!
	 */
	homepageDescription: string
}

export type TranslationFunctions = {
	/**
	 * Alguém sabe as minhas credenciais?
	 */
	homepageTitle: () => LocalizedString
	/**
	 * Utiliza o nosso motor de busca e descobre se foste afetado!
	 */
	homepageDescription: () => LocalizedString
}

export type Formatters = {}
