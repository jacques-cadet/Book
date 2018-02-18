from django.test import TestCase
from .models import Entry
from datetime import date
# Create your tests here.


class EntryTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        Entry.objects.create(date="2018-12-17", time="22:15:45.638836",
                             description='Test case one')
        Entry.objects.create(date="2022-07-19", time="15:35:24.638136",
                             description='Test case two')

    def test_not_appointment_date(self):

        appointment1 = Entry.objects.get(description="Test case one")
        appointment2 = Entry.objects.get(description="Test case two")
        self.assertNotEqual(appointment1.date, date(2018, 11, 11))
        self.assertNotEqual(appointment2.date, date(2018, 4, 24))

    def test_is_appointment_date(self):

        appointment1 = Entry.objects.get(description="Test case one")
        appointment2 = Entry.objects.get(description="Test case two")
        self.assertEqual(appointment1.date, date(2018, 12, 17))
        self.assertEqual(appointment2.date, date(2022, 7, 19))
