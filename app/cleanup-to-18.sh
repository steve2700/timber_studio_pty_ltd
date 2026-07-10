#!/usr/bin/env bash
# Run this from inside your app/ directory:
#   cd ~/ai-projects/timber_studio_pty_ltd/app
#   bash cleanup-to-18.sh
#
# Target: exactly 18 pages.
#   8 core pages:      / about contact portfolio faq privacy terms areas
#   6 core services:    kitchen-renovations built-in-cupboards bathroom-renovations
#                        decking-flooring drywall-ceilings door-installation
#   2 carpenter pages:  carpenter-sandhurst (highest-value suburb)
#                        carpenter-near-me-johannesburg (high-volume generic intent)
#   2 drywall pages:    drywall-sandton (highest-value suburb)
#                        drywalling-contractors-johannesburg (high-volume generic intent)
#
# Everything else below is removed. Door *style* pages (pivot/barn/french/
# security/wooden) are genuinely unique content, not duplicates — but they
# don't fit the 18-page budget as standalone routes right now. Fold their
# content into /door-installation as sections, and split them out again in
# Phase 2 once you have real photos for each style.

set -e

echo "Removing carpenter-suburb pages except sandhurst + near-me-johannesburg..."
rm -rf carpenter-morningside carpenter-rivonia carpenter-rosebank \
       carpenter-sunninghill carpenter-woodmead

echo "Removing drywall/ceiling suburb pages except sandton + drywalling-contractors-johannesburg..."
rm -rf drywall-boksburg drywall-bryanston drywall-centurion drywall-edenvale \
       drywall-fourways drywall-johannesburg-south drywall-midrand drywall-pretoria \
       drywall-rosebank ceiling-installation-bryanston ceiling-installation-edenvale \
       ceiling-repairs-centurion ceiling-repairs-pretoria ceiling-repairs-randburg \
       ceiling-repairs-sandton ceiling-repairs-vereeniging \
       suspended-ceilings-johannesburg suspended-ceilings-sandton

echo "Removing door-fitters suburb duplicates (canonical: door-installation)..."
rm -rf door-fitters-centurion door-fitters-fourways door-fitters-johannesburg \
       door-fitters-midrand door-fitters-pretoria door-fitters-randburg door-fitters-sandton

echo "Removing door-style standalone pages (fold into /door-installation for now)..."
rm -rf pivot-doors pivot-doors-johannesburg pivot-doors-pretoria pivot-doors-sandton \
       barn-doors barn-doors-sandton french-doors french-doors-sandton \
       security-doors security-doors-johannesburg security-doors-pretoria security-doors-sandton \
       wooden-doors solid-wood-doors-pretoria

echo "Removing door repair/service angle pages (Phase 2 material)..."
rm -rf cupboard-door-repair-gauteng door-alignment-repair-gauteng \
       door-handle-replacement-gauteng door-hanging-johannesburg \
       door-lock-replacement-gauteng door-repair-gauteng emergency-door-repair-gauteng

echo "Removing cupboard/kitchen duplicates (canonical: built-in-cupboards / kitchen-renovations)..."
rm -rf kitchen-cupboards custom-built-in-cupboards-johannesburg kitchen-renovation-cost-johannesburg

echo "Removing old granite-carpentry business pages (service dropped entirely)..."
rm -rf granite-installers-midrand granite-installers-pretoria granite-installers-sandton \
       granite-supply-and-installation

echo "Removing off-scope trade pages (not carpentry)..."
rm -rf plumbing handyman-services-johannesburg painting-services-johannesburg \
       waterproofing-repairs-gauteng

echo "Removing remaining Gauteng-wide service-angle pages (Phase 2 material)..."
rm -rf 24-hour-emergency-carpenter-johannesburg move-out-repairs-gauteng \
       rental-property-repairs-gauteng same-day-carpenter-gauteng same-day-kitchen-repairs-gauteng

echo ""
echo "Done. 18 pages remain:"
echo "  / about contact portfolio faq privacy terms areas"
echo "  kitchen-renovations built-in-cupboards bathroom-renovations"
echo "  decking-flooring drywall-ceilings door-installation"
echo "  carpenter-sandhurst carpenter-near-me-johannesburg"
echo "  drywall-sandton drywalling-contractors-johannesburg"
