import { validateCityName } from "./validate/validateCity";
import { validateDate } from "./validate/validateDate";

describe('validateCityName', () => {
    it('должно выдавать предупреждение, если есть экранирование', () => {
      const result = validateCityName('City<');
      expect(result.isValid).toBe(false);
      expect(result.message).not.toBe('');
    });
  
    it('должно пропускать название с восклицательным знаком или дефисами', () => {
      const result = validateCityName('Saint-Louis-du-Ha Ha!');
      expect(result.isValid).toBe(true);
      expect(result.message).not.toBe('');
    });
  
    it('должно пропускать название со спецсимволами', () => {
      const result = validateCityName('Ağrı');
      expect(result.isValid).toBe(true);
      expect(result.message).not.toBe('');
    });
  
    it('должно пропускать название из одной буквы', () => {
      const result = validateCityName('A');
      expect(result.isValid).toBe(true);
      expect(result.message).not.toBe('');
    });
  });
  
  describe('validateDate', () => {
    it('должно пропускать дату в виде ДД.ММ.ГГГГ', () => {
    const today = new Date();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        const date = `${tomorrow.getDate()}.${tomorrow.getMonth() + 1}.${tomorrow.getFullYear()}`;
        const result = validateDate(date);
        expect(result.isValid).toBe(true);
        expect(result.message).not.toBe('');
      });
      
  
    it('не должно пропускать спецсимволы', () => {
        const result = validateDate('12.12.2024!');
      expect(result.isValid).toBe(false);
      expect(result.message).not.toBe('');
    });
  
    it('не должно пропускать буквенные значения', () => {
      const result = validateDate('ab.cd.efgh');
      expect(result.isValid).toBe(false);
      expect(result.message).not.toBe('');
    });
  
    it('должно выдавать предупреждение, если дата раньше текущей', () => {
      const today = new Date();
      const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
      const date = `${yesterday.getDate()}.${yesterday.getMonth() + 1}.${yesterday.getFullYear()}`;
      const result = validateDate(date);
      expect(result.isValid).toBe(false);
      expect(result.message).not.toBe('');
    });
  });
  