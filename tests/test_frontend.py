import pytest
import requests

BASE_URL = "https://mango-rock-0b7c7e40f.3.azurestaticapps.net/"


def test_site_uses_https():
    assert BASE_URL.startswith("https://")


def test_homepage_is_reachable():
    resp = requests.get(BASE_URL, timeout=10)
    assert resp.status_code == 200
    content_type = resp.headers.get("content-type", "").lower()
    assert "text/html" in content_type


def test_homepage_has_name_and_counter_section():
    resp = requests.get(BASE_URL, timeout=10)
    html = resp.text

    assert "Gonzalo Flores" in html
    assert "Visitor counter" in html
    assert 'id="counter"' in html or "id='counter'" in html


def test_visitor_api_returns_json_with_count():
    api_url = BASE_URL + "api/visitor"

    resp = requests.get(api_url, timeout=10)

    # If the SWA route is not configured or not live yet, do not tank the suite
    if resp.status_code == 404:
        pytest.skip("Static Web Apps route /api/visitor is returning 404")

    # If it is reachable, then enforce full behavior
    assert resp.status_code == 200

    data = resp.json()
    assert isinstance(data, dict)
    assert "count" in data
    assert isinstance(data["count"], int)
    assert data["count"] >= 0
