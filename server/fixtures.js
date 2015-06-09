if (Meds.find().count() === 0) {
  Meds.insert({
    title: 'Hydrocodone',
    description: 'Opiod pain medication',
    directions: 'Take twice daily.'
  });

  Meds.insert({
    title: 'Generic Zocor',
    description: 'a cholesterol-lowering statin drug',
    directions: 'Take one in the morning and one in the evening.'
  });

  Meds.insert({
    title: 'Hydrochlorothiazide',
    description: 'A water pill used to lower blood pressure',
    directions: 'Take three times throughout the day.'
  });
}